import Link from "next/link";

const BottomFooter = ({
  developerName = "Ohana",
}: {
  developerName?: string;
}) => {
  developerName = developerName || "Ohana";
  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <div style={{}} className="bottom-footer-container">
        <div style={{ fontSize: "10px", color: "white" }}>
          This website is an independent marketing presentation and is not the
          official page of {developerName} or its affiliated entities. <br />
          Abu Dhabi Properties © All Rights Reserved. 2026
        </div>
        <div style={{ fontSize: "10px", color: "white" }}>
          <Link href="/privacy-cookies-policy">Privacy & Cookies Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
