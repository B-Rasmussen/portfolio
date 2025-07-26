import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import "../style/workHistoryStyle.css";
import TitleBarIcon from "../components/TitleBarIcon";
import WorkTextFile from "./WorkTextFile";
import PersonalProjectTextFile from "./PersonalProjectsTextFile";
import LinkedInRecommendationsTextFile from "./LinkedInRecommendationsTextFile";

function WindowsFolder({ closeFolder, folderTitle, data }: any) {
    const [isWindowOpen, setIsWindowOpen] = useState(
        Array(data.length).fill(false)
    );

    const handleOpen = (index: number) => {
        setIsWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
        // console.log(isWindowOpen[index]);
    };

    const nodeRef = useRef(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleStop = (
        _event: any,
        dragElement: { x: SetStateAction<number>; y: SetStateAction<number> }
    ) => {
        setX(dragElement.x);
        setY(dragElement.y);
    };

    // const handleClick = (index: number) => {
    //     setIsWindowOpen(isWindowOpen.map((i) => i === index));
    //     console.log(isWindowOpen[index])
    // };

    // const closeWindow = (index: number) => {
    //     setIsWindowOpen(isWindowOpen.map((open, i) => (i === index ? false : open)));
    // };

    return (
        <Draggable
            bounds={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
            onStop={handleStop}
            position={{ x, y }}
            nodeRef={nodeRef}
            handle=".grabbable-area"
        >
            {
                <div className="text-file-window" ref={nodeRef}>
                    <div className="grabbable-area">
                        <TitleBarIcon closeWindow={closeFolder} />
                        <div className="title-bar-text">{folderTitle}</div>
                    </div>
                    <div className="folder-content">
                        {folderTitle === "Work History"
                            ? data.map((item: any, index: number) => (
                                  <div
                                      key={item.id}
                                      onClick={() => {
                                          handleOpen(index);
                                          console.log(item);
                                      }}
                                  >
                                      <div className="text-file-icon" />
                                      <text>{item.companyName}</text>
                                      {isWindowOpen[index] && (
                                          <WorkTextFile
                                              index={index}
                                              closeWindow={() =>
                                                  handleOpen(index)
                                              }
                                              companyName={item.companyName}
                                              companyLogo={item.companyLogo}
                                              companyLogoAlt={
                                                  item.companyLogoAlt
                                              }
                                              location={item.location}
                                              startDate={item.startDate}
                                              endDate={item.endDate}
                                              langaugesUsed={item.languagesUsed}
                                              bulletPoints={item.bulletPoints}
                                          />
                                      )}
                                  </div>
                              ))
                            : null}

                        {folderTitle === "Personal Projects"
                            ? data.map((item: any, index: number) => (
                                  <div
                                      key={item.id}
                                      onClick={() => {
                                          handleOpen(index);
                                          console.log(item);
                                      }}
                                  >
                                      <div className="text-file-icon" />
                                      <text>{item.projectName}</text>
                                      {isWindowOpen[index] && (
                                          <PersonalProjectTextFile
                                              index={index}
                                              closeWindow={() =>
                                                  handleOpen(index)
                                              }
                                              projectName={item.projectName}
                                              technologies={item.technologies}
                                              description={item.description}
                                              image={item.image}
                                              imageAlt={item.imageAlt}
                                          />
                                      )}
                                  </div>
                              ))
                            : null}

                        {folderTitle === "LinkedIn Recommendations"
                            ? data.map((item: any, index: number) => (
                                  <div
                                      key={item.id}
                                      onClick={() => {
                                          handleOpen(index);
                                          console.log(item);
                                      }}
                                  >
                                      <div className="text-file-icon" />
                                      <text>{item.person} review.txt</text>
                                      {isWindowOpen[index] && (
                                          <LinkedInRecommendationsTextFile
                                              index={index}
                                              closeWindow={() =>
                                                  handleOpen(index)
                                              }
                                              person={item.person}
                                              bodyText={item.bodyText}
                                          />
                                      )}
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default WindowsFolder;
