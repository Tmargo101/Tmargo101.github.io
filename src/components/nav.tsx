import { Link } from "react-scroll";
import { Button, ButtonVariant } from "@/components/ui/button";

export interface NavProps {
    isDarkMode: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Nav(props: NavProps) {
    return (
        <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold">Thomas Margosian</h1>
            <nav className="flex space-x-6">
                <Link to="about" smooth duration={500} className="cursor-pointer">About</Link>
                <Link to="projects" smooth duration={500} className="cursor-pointer">Projects</Link>
                <Link to="contact" smooth duration={500} className="cursor-pointer">Contact</Link>
            </nav>
            <Button variant={ButtonVariant.OUTLINE}onClick={props.onClick}>{props.isDarkMode ? "Light Mode" : "Dark Mode"}</Button>
      </header>

    )
}