import languagesList from "../data/languageListData";
import "../style/languagesListStyle.css";

function LanguagesList() {
    return (
        <div className="languages-list-container">
            {languagesList.map((language) => (
                <div key={language.id} className={language.id % 2 ? "language-card-even" : "language-card-odd"}>
                    {language.image && (
                        <img
                            src={language.image}
                            alt={language.imageAlt}
                            style={{ height: "50px" }}
                        />
                    )}
                    <div className="language-name">{language.languageName}</div>
                </div>
            ))}
        </div>
    );
}

export default LanguagesList;
