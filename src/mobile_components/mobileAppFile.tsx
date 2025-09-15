type mobileAppFileProps = {
    data: any[];
    dataName: string;
};

export function MobileAppFile({ data, dataName }: mobileAppFileProps) {
    return (
        <div>
            {dataName === "Work History"
                ? data.map((item: any, index: number) => (
                      <div
                          key={item.id}
                          // onClick={() => {
                          //     handleOpen(index);
                          // }}
                          className=""
                      >
                          <img
                              src={item.companyLogo ? item.companyLogo : null}
                              alt={item.companyLogoAlt}
                          />
                          <text>{item.companyName}</text>
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
                          {/* <img
                              src={item.companyLogo}
                              alt={item.companyLogoAlt}
                          /> */}
                          <text>{item.projectName}</text>
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
                          <text>{item.person}</text>
                      </div>
                  ))
                : null}
        </div>
    );
}
