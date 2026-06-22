import API_URL from "./api";

export async function analyzeRisk(data) {

  const response =
    await fetch(`${API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify(data)
    });

  return response.json();
}