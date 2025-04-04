import Button from "./Button";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function NavBar({ navigateTo }: NavBarProps) {
    return (
        <>
            <Button
                buttonName={"Landing"}
                onButtonPressed={() => navigateTo("Landing")}
            />
            <Button
                buttonName={"Projects"}
                onButtonPressed={() => navigateTo("Projects")}
            />
            <Button
                buttonName={"Experiment"}
                onButtonPressed={() => navigateTo("Experiment")}
            />
        </>
    );
}

export default NavBar;
