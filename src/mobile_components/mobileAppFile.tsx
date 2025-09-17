import { MobileAppIcon } from "./MobileAppIcon";

import '../style/mobileAppStyle.css';

type mobileAppFileProps = {
    data: any[];
    dataName: string;
};

export function MobileAppFile({ data, dataName }: mobileAppFileProps) {
    return (
        <div className="app-icon-layout">
            {dataName === "Work History"
                ? data.map((item: any, index: number) => (
                    <div
                        key={item.id}
                            // onClick={() => {
                            //     handleOpen(index);
                            // }}
                        className=""
                    >
                        <MobileAppIcon
                            image={item.companyLogo}
                            // imageAlt={item.companyLogoAlt}
                            name={item.companyName}
                            nameAbbr={item.companyNameAbbr}
                        />
                    </div>
                ))
                : null}
            {dataName === "Personal Projects"
                ? data.map((item: any, index: number) => (
                    <div
                        key={item.id}
                            // onClick={() => {
                            //     handleOpen(index);
                            // }}
                        className=""
                    >
                        <MobileAppIcon name={item.projectName} nameAbbr={item.projectNameAbbr}/>
                    </div>
                ))
            : null}
            {dataName === "Linkedin Recommendations"
                ? data.map((item: any, index: number) => (
                    <div
                        key={item.id}
                            // onClick={() => {
                            //     handleOpen(index);
                            // }}
                        className=""
                    >
                        <MobileAppIcon
                            image={item.companyLogo}
                            name={item.person}
                            nameAbbr={item.personNameAbbr}
                        />
                    </div>
                ))
                : null}
        </div>
    );
}
