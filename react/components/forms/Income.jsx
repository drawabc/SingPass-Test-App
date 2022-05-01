const Income = (props) => {
  const income = props.income;
  const income2 = {
    cpfbalance: {
      lastupdated: "2022-04-29",
      oa: { value: 58839.75 },
      source: "1",
      classification: "C",
      ma: { value: 20466 },
      sa: { value: 15349.5 },
    },
    ownerprivate: {
      lastupdated: "2022-04-29",
      source: "1",
      classification: "C",
      value: "false",
    },
    cpfhistory: [
      {
        date: { value: "2022-02-28" },
        employer: { value: "CRYSTAL HORSE INVEST PTE LTD" },
        amount: { value: 1575 },
        month: { value: "2022-02" },
      },
      {
        date: { value: "2022-03-29" },
        employer: { value: "CRYSTAL HORSE INVEST PTE LTD" },
        amount: { value: 1575 },
        month: { value: "2022-03" },
      },
      {
        date: { value: "2022-04-29" },
        employer: { value: "CRYSTAL HORSE INVEST PTE LTD" },
        amount: { value: 3150 },
        month: { value: "2022-04" },
      },
    ],
    noa: [
      {
        amount: { value: 64400 },
        trade: { value: 0 },
        interest: { value: 0 },
        yearofassessment: { value: "2021" },
        taxclearance: { value: "N" },
        employment: { value: 64400 },
        rent: { value: 0 },
        category: { value: "ORIGINAL" },
      },
      {
        amount: { value: 53700 },
        trade: { value: 0 },
        interest: { value: 0 },
        yearofassessment: { value: "2020" },
        taxclearance: { value: "N" },
        employment: { value: 36112.8 },
        rent: { value: 0 },
        category: { value: "ORIGINAL" },
      },
    ],
  };
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
                {income.noa &&
                  income.noa.map((n) => <th>{n.yearofassessment.value}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment</td>
                {income.noa &&
                  income.noa.map((n) => <td>{n.employment.value}</td>)}
              </tr>
              <tr>
                <td>Trade</td>
                {income.noa && income.noa.map((n) => <td>{n.trade.value}</td>)}
              </tr>
              <tr>
                <td>Interest</td>
                {income.noa &&
                  income.noa.map((n) => <td>{n.interest.value}</td>)}
              </tr>
              <tr>
                <td>Rent</td>
                {income.noa && income.noa.map((n) => <td>{n.rent.value}</td>)}
              </tr>
              <tr>
                <th>Total Income</th>
                {income.noa && income.noa.map((n) => <td>{n.amount.value}</td>)}
              </tr>
              <tr>
                <th>Tax Clearance</th>
                {income.noa &&
                  income.noa.map((n) => <td>{n.taxclearance.value}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="h4">Other Income Information</div>
      </div>
      <div className="row">
        <div className="col-3 text-secondary">
          Ownership of Private Residential Property
        </div>
        <div className="col-3">
          {income.ownerprivate != null ? income.ownerprivate.value : ""}
        </div>
      </div>
      <div className="row mt-3">
        <div className="h4">CPF Account Balance</div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <tbody>
              <tr>
                <td>Ordinary Account(OA) S$</td>
                <td>{income.cpfbalance && income.cpfbalance.oa.value}</td>
              </tr>
              <tr>
                <td>Special Account(SA) S$</td>
                <td>{income.cpfbalance && income.cpfbalance.sa.value}</td>
              </tr>
              <tr>
                <td>Medisave Account(MA) S$</td>
                <td>{income.cpfbalance && income.cpfbalance.ma.value}</td>
              </tr>
            </tbody>
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
            <tbody>
              {income.cpfhistory &&
                income.cpfhistory.map((h) => (
                  <tr>
                    <td>{h.month.value}</td>
                    <td>{h.date.value}</td>
                    <td>{h.amount.value}</td>
                    <td>{h.employer.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;
