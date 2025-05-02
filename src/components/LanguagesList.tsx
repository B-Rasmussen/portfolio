import languagesList from "../data/languageListData";

function LanguagesList() {
    return (
        <div>
            {languagesList.map((language) => (
                <div key={language.id} className="language-card">
                    <h2>{language.languageName}</h2>
                    {language.image && (
                        <img
                            src={language.image}
                            alt={language.imageAlt}
                            style={{ height: "50px" }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default LanguagesList;
