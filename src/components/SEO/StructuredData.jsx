export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "VitalCare Health",
    "description": "Locally owned urgent care and primary care clinic in Peachtree City, GA",
    "url": "http://vitalcarega.com",
    "logo": "http://vitalcarega.com/android-chrome-192x192.png",
    "image": "http://vitalcarega.com/android-chrome-192x192.png",
    "telephone": "+14708513800",
    "email": "info@vitalcarega.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Eastbrook Bend B",
      "addressLocality": "Peachtree City",
      "addressRegion": "GA",
      "postalCode": "30269",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.3968",
      "longitude": "-84.5957"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "acceptsReservations": "True",
    "medicalSpecialty": [
      "Urgent Care",
      "Primary Care",
      "Family Medicine",
      "Telemedicine"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "IV Hydration Therapy"
      },
      {
        "@type": "MedicalTest",
        "name": "COVID-19 Testing"
      },
      {
        "@type": "MedicalTest",
        "name": "Flu Testing"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Annual Physical Exams"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Weight Management"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr",
      "https://www.instagram.com/vitalcare__health"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VitalCare Health",
    "description": "Locally owned and operated urgent care and primary care clinic serving Peachtree City and surrounding areas",
    "url": "http://vitalcarega.com",
    "telephone": "+14708513800",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Eastbrook Bend B",
      "addressLocality": "Peachtree City",
      "addressRegion": "GA",
      "postalCode": "30269",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
