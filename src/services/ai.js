/**
 * Communicates with the secure Express backend to call the Groq model
 */

/**
 * Sends a chat message to the backend and handles streaming if an onChunk callback is supplied.
 * @param {string} message 
 * @param {Array} history 
 * @param {Function} [onChunk] - Optional callback(chunkText, accumulatedText)
 * @returns {Promise<string>}
 */
export const chatWithAI = async (message, history = [], onChunk) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || 'Server error communicating with AI.');
    }

    if (onChunk && response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // Hold onto incomplete last line

        for (const line of lines) {
          const cleanLine = line.trim();
          if (!cleanLine.startsWith('data: ')) continue;

          const dataStr = cleanLine.slice(6);
          if (dataStr === '[DONE]') continue;

          let parsed;
          try {
            parsed = JSON.parse(dataStr);
          } catch (e) {
            console.error("Error parsing stream line:", e);
            continue;
          }

          if (parsed.error) {
            throw new Error(parsed.error);
          }

          if (parsed.text) {
            fullText += parsed.text;
            onChunk(parsed.text, fullText);
          }
        }
      }
      return fullText;
    } else {
      const data = await response.json();
      return data.response;
    }
  } catch (error) {
    console.error("AI service error in chat:", error);
    throw new Error(error.message || "Unable to reach the health companion service. Please ensure the backend server is running.");
  }
};

/**
 * Sends symptom parameters to the backend for structured diagnostic assessment
 * @param {Object} data - { symptoms, category, severity, duration }
 * @returns {Promise<Object>}
 */
export const analyzeSymptoms = async (data) => {
  try {
    const response = await fetch('/api/analyze-symptoms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const report = await response.json();

    if (!response.ok) {
      throw new Error(report.error || 'Server error analyzing symptoms.');
    }

    return report;
  } catch (error) {
    console.error("AI service error in symptom checker:", error);
    throw new Error(error.message || "Failed to compile symptom analysis. Please check your backend connections.");
  }
};
