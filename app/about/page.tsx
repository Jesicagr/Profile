import AboutComponent from "../components/About";
import ExperienceComponent from "../components/Experience";

export default function AboutPage() {
    return (
        <main className="container" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
            <AboutComponent />
            <ExperienceComponent />
        </main>
    );
}
