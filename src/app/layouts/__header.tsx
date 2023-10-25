import { Menu, UserCircle } from "lucide-react";

export function Header() {
  return (
    <main>
      <section>
        <div>
          <ul className="flex flex-wrap justify-between">
            <li>
              <Menu color="black" size={40} />
            </li>
            <li>
            <UserCircle color="#FFFBF2" size={40} fill="black" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
