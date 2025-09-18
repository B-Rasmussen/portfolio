import { MobileAppIcon } from "./MobileAppIcon";

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
                                // imageAlt={item.companyLogoAlt}
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
                    <MobileAppIcon name="Reviews" nameAbbr="Reviews"/>
                    {/* <MobileReviewsApp data={data} /> */}
                </div>
            ) : null}
        </div>
    );
}
