interface ApiRequestConfig<T> {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: T;
}

const API_BASE_URL = process.env.REACT_APP_API_URL;

async function apiRequest<T, U = undefined>(
  config: ApiRequestConfig<U>,
): Promise<T> {
  const { endpoint, method, headers, body } = config;
  const url = `${API_BASE_URL}${endpoint}`;
  const requestOptions: RequestInit = {
    method,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      // ここでAuthorizationヘッダーを設定する場合
      // Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : null,
  };
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      // エラーレスポンスのハンドリング
      throw new Error(
        `API request failed ${response.status}: ${response.statusText}`,
      );
    }
    return response.json();
  } catch (error) {
    // ネットワークエラーやその他エラーハンドリング
    console.error(`API request error: ${error}`);
    throw error;
  }
}

export default apiRequest;
