import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100">
      <h1>{t("welcome")}</h1>
    </div>
  );
}
