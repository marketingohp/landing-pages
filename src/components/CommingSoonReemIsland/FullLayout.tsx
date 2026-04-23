import PropertySearchForm from "../common/PropertySearchForm";

export default function FullLayout() {
  return (
    <>
      <div className="MainContainer">
        <div className="Container">
          <div className="Row">
            <div className="Image">
              <img
                src="https://openhomegroup.com/wp-content/uploads/2025/11/coming-soon_reem_island_story-496x882.webp"
                width={600}
                height={900}
                alt="one residences"
              />
            </div>

            <div className="Lefti">
              <PropertySearchForm
                formName="coming-soon-reem-island"
                pointName="get-in-touch"
                formType="banner-form"
                visibleFields={[
                  "firstName",
                  "lastName",
                  "email",
                  "phoneNumber",
                  "hearAboutUs",
                  "unitType",
                  "bedrooms",
                  "budget",
                  "message",
                ]}
                requiredFields={["firstName", "lastName", "phoneNumber","email"]}
                redirectToThankYou={true}
                thankYouPath="/coming-soon-reem-island/thank-you"
                className="Form"
                // colorCodeOne="#ebe8dd"
                // colorCodeTwo="#0f1f2e"
                // colorCodeThree="#5f602c"
                // colorCodeBtnBg="#5f602c"
                // colorCodeBtnText="#cccccc"
                // colorCodeBtnBorder="#ebe8dd"
                // colorCodeBtnHoverBg="#ebe8dd"
                // colorCodeBtnHoverText="#ffffff"
                // colorCodeBtnHoverBorder="#5f602c"
              />
            </div>
            <div className="Righti">Right Side </div>
          </div>
        </div>
      </div>
    </>
  );
}
