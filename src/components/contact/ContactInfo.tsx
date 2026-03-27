import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
    )}`,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <Card hover={false}>
        <h2 className="text-2xl font-bold text-text-primary mb-6">Contact Details</h2>
        <ul className="space-y-5">
          {contactItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-laser-blue/10 text-laser-blue">
                {item.icon}
              </span>
              <div>
                <p className="text-sm text-text-muted">{item.label}</p>
                <a
                  href={item.href}
                  className="text-text-primary hover:text-laser-blue transition-colors"
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                >
                  {item.value}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Business Hours Card */}
      <Card hover={false}>
        <h2 className="text-2xl font-bold text-text-primary mb-6">Business Hours</h2>
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-laser-blue/10 text-laser-blue">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <ul className="space-y-2">
            <li className="flex justify-between gap-4">
              <span className="text-text-secondary">{siteConfig.businessHours.weekdays}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-text-secondary">{siteConfig.businessHours.saturday}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-text-muted">{siteConfig.businessHours.sunday}</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
