export const useTranslations = () => (key: string) => key;

export const NextIntlClientProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export const setRequestLocale = () => {};
export const getTranslations = async () => (key: string) => key;
export const hasLocale = () => true;
