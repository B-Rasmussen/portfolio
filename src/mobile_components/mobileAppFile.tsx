import { MobileAppIcon } from "./MobileAppIcon";
import review_logo from "../assets/review_logo.png";
import "../style/mobileAppStyle.css";

type mobileAppFileProps = {
    appNavigateTo: (path: string, index: number) => void;
    data: any[];
    dataName: string;
};

export function MobileAppFile({ appNavigateTo, data, dataName }: mobileAppFileProps) {
    return (
        <div className="app-icon-layout">
            {dataName === "Work History"
                ? data.map(
                    (
                        item: any,
                        index: number
                    ) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                appNavigateTo("MobileWorkHistory", index);
                            }}
                            className=""
                        >
                            <MobileAppIcon
                                appIcon={item.companyAppIcon}
                                name={item.companyName}
                                nameAbbr={item.companyNameAbbr}
                            />
                        </div>
                    )
                )
                : null}
            {dataName === "Personal Projects"
                ? data.map(
                    (
                        item: any,
                        index: number
                    ) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                appNavigateTo("MobilePersonalProjects", index);
                            }}
                            className=""
                        >
                            <MobileAppIcon
                                appIcon={item.projectAppLogo}
                                name={item.projectName}
                                nameAbbr={item.projectNameAbbr}
                            />
                        </div>
                    )
                )
                : null}
            {dataName === "Linkedin Recommendations" ? (
                <div
                    // key={item.id}
                    onClick={() => {
                        appNavigateTo("MobileLinkedInRecommendations", 0);
                    }}
                    className=""
                >
                    <MobileAppIcon appIcon={review_logo} name="Reviews" nameAbbr="Reviews"/>
                </div>
            ) : null}
        </div>
    );
}
