const Contact = (props) => {
  const register = props.register;
  return (
    <form>
      <div className="mt-3">
        <div className="h4">Contact Info</div>
        <div className="mb-3">
          <label for="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            {...register("mobileNumber")}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email")}
          />
        </div>
      </div>
      <div className="mt-3">
        <div className="h4">Registered Address</div>
        <div className="mb-3">
          <label for="blockNumber" className="form-label">
            Block Number
          </label>
          <input
            type="text"
            className="form-control"
            id="blockNumber"
            {...register("blockNumber")}
          />
        </div>
        <div className="mb-3">
          <label for="streetName" className="form-label">
            Street Name
          </label>
          <input
            type="text"
            className="form-control"
            id="streetName"
            {...register("streetName")}
          />
        </div>
        <div className="mb-3">
          <label for="buildingName" className="form-label">
            Building Name
          </label>
          <input
            type="text"
            className="form-control"
            id="buildingName"
            {...register("buildingName")}
          />
        </div>
        <div className="mb-3">
          <label for="unitNo" className="form-label">
            Unit No
          </label>
          <input
            type="text"
            className="form-control"
            id="unitNo"
            {...register("unitNo")}
          />
        </div>
        <div className="mb-3">
          <label for="postalCode" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            {...register("postalCode")}
          />
        </div>
        <div className="mb-3">
          <label for="housingType" className="form-label">
            Type of Housing
          </label>
          <input
            type="text"
            className="form-control"
            id="housingType"
            {...register("housingType")}
          />
        </div>
      </div>
    </form>
  );
};

export default Contact;
