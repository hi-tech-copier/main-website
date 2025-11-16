import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi-Tech Copier Solutions | Xerox Machine Sales & Services in Hyderabad",
  description: "Leading provider of Canon, Xerox, and Kyocera copier machines in Hyderabad, Telangana & Andhra Pradesh. Sales, service, rentals & repairs. 15+ years experience. Call +91-8885621001",
  keywords: [
    "xerox machine Hyderabad",
    "photocopier sales Hyderabad",
    "copier rental Hyderabad",
    "Canon copier Telangana",
    "Xerox service Hyderabad",
    "Kyocera printer Andhra Pradesh",
    "digital copier Kachiguda",
    "xerox machine rental Hyderabad",
    "photocopier repair Telangana",
    "office copier solutions Hyderabad",
    "printer sales Hyderabad",
    "copier maintenance Telangana",
    "Xerox machine service Andhra Pradesh",
    "photocopier spare parts Hyderabad",
    "digital printer Hyderabad",
    "Hi-Tech Copier Solutions",
    "best copier dealer Hyderabad",
    "affordable xerox rental Hyderabad"
  ].join(", "),
  authors: [
    {
      name: "Hi-Tech Copier Solutions",
      url: "https://hitechcopier.in",
    },
  ],
  publisher: "Hi-Tech Copier Solutions",
  openGraph: {
    title: "Hi-Tech Copier Solutions | Premium Xerox & Copier Services in Hyderabad",
    description: "Trusted provider of Canon, Xerox, Kyocera copier machines in Hyderabad, Telangana & AP. Sales, rentals, repairs & service since 2008. Best prices guaranteed.",
    url: "https://hitechcopier.in",
    siteName: "Hi-Tech Copier Solutions",
    images: [
      {
        url: "/assets/hitech-copier-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hi-Tech Copier Solutions - Xerox Machine Sales & Services Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi-Tech Copier Solutions | Xerox Machine Sales Hyderabad",
    description: "Leading copier machine provider in Hyderabad, Telangana & AP. Canon, Xerox, Kyocera sales, service & rentals. 15+ years experience.",
    images: ["/assets/hitech-copier-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: "https://hitechcopier.in",
  },
  category: "Business Services",
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.385044;78.486671',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385044;78.486671" />
        <meta name="ICBM" content="17.385044, 78.486671" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Local Business Schema */}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://hitechcopier.in",
            "name": "Hi-Tech Copier Solutions",
            "image": "/assets/hitech-logo.png",
            "description": "Leading provider of Canon, Xerox, and Kyocera copier machines in Hyderabad, Telangana and Andhra Pradesh. Specializing in sales, service, rentals, and repairs since 2008.",
            "url": "https://hitechcopier.in",
            "telephone": "+91-8885621001",
            "email": "HITECHCOPIERSOLUTION1001@gmail.com",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda",
              "addressLocality": "Kachiguda, Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500027",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.385044",
              "longitude": "78.486671"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              }
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Hyderabad"
              },
              {
                "@type": "State",
                "name": "Telangana"
              },
              {
                "@type": "State",
                "name": "Andhra Pradesh"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Copier Machine Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Xerox Machine Sales",
                    "description": "Sales of Canon, Xerox, and Kyocera copier machines"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Copier Machine Rentals",
                    "description": "Flexible rental packages for photocopiers and printers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Copier Repair & Service",
                    "description": "Professional repair and maintenance services for all copier brands"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spare Parts Sales",
                    "description": "Genuine spare parts for copier machines at competitive prices"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "founder": {
              "@type": "Person",
              "name": "Mohammad Jaffar Ahmed"
            },
            "foundingDate": "2008",
            "sameAs": [
              "https://www.facebook.com/people/Xerox-Machines-sales-and-service/100063738321138",
              "https://www.youtube.com/channel/UCdgZOHjQ0V34QnO4LXWvD5w",
              "https://www.instagram.com/hitechcopier",
              "https://www.linkedin.com/company/hi-tech-copier",
              "https://x.com/hitechcopier"
            ],
            "paymentAccepted": "Cash, UPI, Bank Transfer",
            "currenciesAccepted": "INR"
          })}
        </Script>

        {/* Service Schema */}
        <Script id="service-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Xerox Machine Sales and Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hi-Tech Copier Solutions",
              "telephone": "+91-8885621001"
            },
            "areaServed": {
              "@type": "City",
              "name": "Hyderabad",
              "containedInPlace": {
                "@type": "State",
                "name": "Telangana"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Copier Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Canon Copier Machines",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Canon Digital Copier",
                        "description": "High-quality Canon copier machines for business use"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Xerox Copier Machines",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Xerox WorkCentre Series",
                        "description": "Professional Xerox copier machines with advanced features"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Kyocera Copier Machines",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Kyocera TASKalfa Series",
                        "description": "Efficient Kyocera copier machines for high-volume printing"
                      }
                    }
                  ]
                }
              ]
            }
          })}
        </Script>

        {/* Organization Schema */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hi-Tech Copier Solutions",
            "alternateName": "Hi-Tech Copier",
            "url": "https://hitechcopier.in",
            "logo": "/assets/hitech-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8885621001",
              "contactType": "customer service",
              "areaServed": ["IN-TG", "IN-AP"],
              "availableLanguage": ["English", "Hindi", "Telugu", "Urdu"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No: 3, 1-766, Tirmala Arcade, Nimboliadda",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500027",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/people/Xerox-Machines-sales-and-service/100063738321138",
              "https://www.youtube.com/channel/UCdgZOHjQ0V34QnO4LXWvD5w",
              "https://www.instagram.com/hitechcopier",
              "https://www.linkedin.com/company/hi-tech-copier"
            ]
          })}
        </Script>

        {/* BreadcrumbList Schema */}
        <Script id="breadcrumb-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hitechcopier.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://hitechcopier.in/Products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://hitechcopier.in#services"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Rentals",
                "item": "https://hitechcopier.in#rentals"
              }
            ]
          })}
        </Script>
      </body>
    </html>
  );
}