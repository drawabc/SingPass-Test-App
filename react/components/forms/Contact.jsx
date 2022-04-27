const Contact = (props) => {
  const register = props.register;
  return (
    <form>
      <div className="mt-3">
        <div className="h4">Contact Info</div>
        <div className="mb-3">
          <label for="mobileno" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileno"
            {...register("mobileno")}
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
          <label for="block" className="form-label">
            Block Number
          </label>
          <input
            type="text"
            className="form-control"
            id="block"
            {...register("block")}
          />
        </div>
        <div className="mb-3">
          <label for="street" className="form-label">
            Street Name
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            {...register("street")}
          />
        </div>
        <div className="mb-3">
          <label for="building" className="form-label">
            Building Name
          </label>
          <input
            type="text"
            className="form-control"
            id="building"
            {...register("building")}
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
          <label for="postal" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="postal"
            {...register("postal")}
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
