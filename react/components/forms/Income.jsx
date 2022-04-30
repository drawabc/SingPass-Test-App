const Income = (props) => {
  const income = props.income;
  return (
    <div>
      <div className="row mt-3">
        <div className="h4">Notice of Assessment (History)</div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Year of Asssement</th>
                <th>2018</th>
                <th>2019</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment</td>
                <td>asdf</td>
                <td>asdf</td>
              </tr>
              <tr>
                <td>Trade</td>
              </tr>
              <tr>
                <td>Interest</td>
              </tr>
              <tr>
                <td>Rent</td>
              </tr>
              <tr>
                <th>Total Income</th>
              </tr>
              <tr>
                <th>Tax Clearance</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="h4">Other Income Information</div>
      </div>
      <div className="row">
        <div className="col-7 text-secondary">
          Ownership of Private Residential Property
        </div>
        <div className="col-3">No</div>
      </div>
      <div className="row mt-3">
        <div className="h4">CPF Account Balance</div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-borderless">
            <tr>
              <td>Ordinary Account(OA) S$</td>
              <td>asdf</td>
            </tr>
            <tr>
              <td>Special Account(SA) S$</td>
            </tr>
            <tr>
              <td>Medisave Account(MA) S$</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="h4">CPF Contribution History</div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>For Month</th>
                <th>Paid On</th>
                <th>Amount S$</th>
                <th>Employer</th>
              </tr>
            </thead>
            <tr>
              <td>March</td>
              <td>March</td>
              <td>March</td>
              <td>March</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;
