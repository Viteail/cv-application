import { Section } from "../Section";

export const App: React.FC = () => {
  return (
    <>
      <div>
        <Section text="Personal Details">
          <form>
            <label>Full Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone</label>
            <input type="tel"></input>
            <label>Adress</label>
            <input type="text"></input>
          </form>
        </Section>
        <Section text="Educational Experience">
          <form>
            <label>School</label>
            <input type="text"></input>
            <label>Degree</label>
            <input type="text"></input>
            <div className="date-wrapper">
              <label>Start Date</label>
              <input type="text"></input>
              <label>End Date</label>
              <input type="text"></input>
            </div>
            <label>Location</label>
            <input type="text"></input>
          </form>
        </Section>
        <Section text="Practical Experience">
          <form>
            <label>Company Name</label>
            <input type="text"></input>
            <label>Position Title</label>
            <input type="text"></input>
            <div className="date-wrapper">
              <label>Start Date</label>
              <input type="text"></input>
              <label>End Date</label>
              <input type="text"></input>
            </div>
            <label>Location</label>
            <input type="text"></input>
            <label>Description</label>
            <input type="text"></input>
          </form>
        </Section>
      </div>
      <div></div>
    </>
  );
};
