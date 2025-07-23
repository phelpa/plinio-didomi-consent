export type Consent = {
  id: number;
  name: string;
  email: string;
  newsletter: boolean;
  ads: boolean;
  statistics: boolean;
  timestamp: string;
};

const CONSENTS_KEY = "didomi_consents";

const getStoredConsents = (): Consent[] => {
  const stored = localStorage.getItem(CONSENTS_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveConsents = (consents: Consent[]): void => {
  localStorage.setItem(CONSENTS_KEY, JSON.stringify(consents));
};

const mockPostConsent = (body: string): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const consentData = JSON.parse(body);
      const existingConsents = getStoredConsents();
      const newConsent: Consent = {
        id: existingConsents.length + 1,
        ...consentData,
        timestamp: new Date().toISOString(),
      };

      const updatedConsents = [...existingConsents, newConsent];
      saveConsents(updatedConsents);

      resolve(
        new Response(JSON.stringify(newConsent), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        })
      );
    }, 300);
  });
};

const mockGetConsents = (): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const consents = getStoredConsents();
      resolve(
        new Response(JSON.stringify(consents), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
    }, 300);
  });
};

const mockFetch = (url: string, options?: RequestInit): Promise<Response> => {
  if (url === "/consents" && options?.method === "POST") {
    return mockPostConsent(options.body as string);
  } else if (
    url === "/consents" &&
    (!options?.method || options.method === "GET")
  ) {
    return mockGetConsents();
  }

  return Promise.reject(
    new Error(`Unhandled request: ${options?.method || "GET"} ${url}`)
  );
};

export const addConsent = async (
  consentData: Omit<Consent, "id" | "timestamp">
): Promise<Consent> => {
  const response = await mockFetch("/consents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(consentData),
  });
  return response.json();
};

export const getConsents = async (): Promise<Consent[]> => {
  const response = await mockFetch("/consents");
  return response.json();
};
