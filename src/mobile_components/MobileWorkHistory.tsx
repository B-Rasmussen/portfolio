import workHistory from "../data/workHistory";
import { MobileInAppNavBar } from "./MobileInAppNavBar";

type MobileWorkHistoryAppProps = {
    appNavigateTo: (path: string, index: number) => void;
    idNumber: number;
};

export function MobileWorkHistoryApp({
    appNavigateTo,
    idNumber,
}: MobileWorkHistoryAppProps) {
    return (
        <>
            <MobileInAppNavBar appNavigateTo={appNavigateTo} />
            <div id="mobile-company-header">
                {workHistory[idNumber].companyLogo && (
                    <img
                        src={workHistory[idNumber].companyLogo}
                        alt={workHistory[idNumber].companyLogoAlt}
                        className="mobile-company-logo"
                        style={{ width: "25px", height: "auto" }}
                    />
                )}
                <h3>{workHistory[idNumber].companyName}</h3>
            </div>
            <h4>{workHistory[idNumber].positionTitle}</h4>
            <>{workHistory[idNumber].location}</>
            <div>
                {workHistory[idNumber].startDate} -{" "}
                {workHistory[idNumber].endDate}
            </div>
            <div>
                Languages/Frameworks:
                <br />
                {workHistory[idNumber].languagesUsed.map(
                    (item: string, index: number) => {
                        return (
                            <span key={index}>
                                {item}
                                {index <
                                workHistory[idNumber].languagesUsed.length - 1
                                    ? ", "
                                    : ""}
                            </span>
                        );
                    }
                )}
            </div>
            <ul>
                {workHistory[idNumber].bulletPoints.map(
                    (item: string, index: number) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        );
                    }
                )}
            </ul>
        </>
    );
}
