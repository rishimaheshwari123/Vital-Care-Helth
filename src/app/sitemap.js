export default async function sitemap() {
  const baseURL = "https://palakchoudhary52.wixsite.com";

  return [
    { url: `${baseURL}/`, lastModified: new Date() },
    { url: `${baseURL}/weight-management`, lastModified: new Date() },
    { url: `${baseURL}/urgent-care`, lastModified: new Date() },
    { url: `${baseURL}/urgent-care`, lastModified: new Date() },
    { url: `${baseURL}/about`, lastModified: new Date() },
    { url: `${baseURL}/founder`, lastModified: new Date() },
    { url: `${baseURL}/services/weight-management`, lastModified: new Date() },
    { url: `${baseURL}/services/annual-physicals`, lastModified: new Date() },
    { url: `${baseURL}/services/flu-testing-treatment`, lastModified: new Date() },
    { url: `${baseURL}/services/sports-physicals`, lastModified: new Date() },
    { url: `${baseURL}/services/covid-19-testing`, lastModified: new Date() },
    { url: `${baseURL}/services/in-house-labs`, lastModified: new Date() },
    { url: `${baseURL}/services/diabetes-managements`, lastModified: new Date() },
    { url: `${baseURL}/services/sore-throat`, lastModified: new Date() },
    { url: `${baseURL}/services/gastrointestinal-issues`, lastModified: new Date() },
    { url: `${baseURL}/services/telemedicine`, lastModified: new Date() },
    { url: `${baseURL}/services/migraine-relief`, lastModified: new Date() },

  ];
}
