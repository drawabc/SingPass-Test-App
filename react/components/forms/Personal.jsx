const Personal = (props) => {
  const register = props.register;
  return (
    <form>
      <div className="mt-3">
        <div className="h4">Personal Info</div>
        <div className="mb-3">
          <label for="nric" className="form-label">
            NRIC
          </label>
          <input
            type="text"
            className="form-control"
            id="nric"
            {...register("nric")}
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label for="sex" className="form-label">
            Sex
          </label>
          <input
            type="text"
            className="form-control"
            id="sex"
            {...register("sex")}
          />
        </div>
        <div className="mb-3">
          <label for="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            id="dob"
            {...register("dob")}
          />
        </div>
        <div className="mb-3">
          <label for="country" className="form-label">
            Country of Birth
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            {...register("country")}
          />
        </div>
        <div className="mb-3">
          <label for="residentialStatus" className="form-label">
            Residential Status
          </label>
          <input
            type="text"
            className="form-control"
            id="residentialStatus"
            {...register("residentialStatus")}
          />
        </div>
        <div className="mb-3">
          <label for="nationality" className="form-label">
            Nationality
          </label>
          <input
            type="text"
            className="form-control"
            id="nationality"
            {...register("nationality")}
          />
        </div>
        <div className="mb-3">
          <label for="race" className="form-label">
            Race
          </label>
          <input
            type="text"
            className="form-control"
            id="race"
            {...register("race")}
          />
        </div>
      </div>
    </form>
  );
};

export default Personal;
