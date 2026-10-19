import { profile } from "@/data/profile";

export function Footer() {
  const { contacts } = profile;
  return (
    <footer className="border-t border-linha bg-giz">
      <div className="shell flex flex-col gap-4 py-8 text-[0.95rem] text-grafite sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name}, {profile.role.toLowerCase()} em {profile.city}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="hover:text-nanquim">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={contacts.github} target="_blank" rel="noreferrer" className="hover:text-nanquim">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.cvUrl} download className="hover:text-nanquim">
              Currículo em PDF
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
