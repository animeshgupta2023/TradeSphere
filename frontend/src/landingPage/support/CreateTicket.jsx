export default function CreateTicket(){
    const linkStyle = {
        textDecoration: "none",
        lineHeight: "2.5"
    };
    return (
        <div className="container">
            <div className="row p-5 mt-5">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
                <div className="col-4 px-5">
                    <h4 className="mt-5 mb-5">
                        <i className="fa-solid fa-circle-plus"></i> Account Opening
                    </h4>
                    <a href="#" style={linkStyle}>Online Account Opening</a><br />
                    <a href="#" style={linkStyle}>Offline Account Opening</a><br />
                    <a href="#" style={linkStyle}>Company, Partnership and HUF Account Opening</a><br />
                    <a href="#" style={linkStyle}>NRI Account Opening</a><br />
                    <a href="#" style={linkStyle}>Charges at Zerodha</a><br />
                    <a href="#" style={linkStyle}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
                    <a href="#" style={linkStyle}>Getting Started</a><br />
                </div>
                <div className="col-4 px-5">
                    <h4 className="mt-5 mb-5">
                        <i className="fa-solid fa-user"></i> Your Zerodha Account
                    </h4>
                    <a href="#" style={linkStyle}>Login Credentials</a><br />
                    <a href="#" style={linkStyle}>Account Modifications and Segment Addition</a><br />
                    <a href="#" style={linkStyle}>DP ID and bank details</a><br />
                    <a href="#" style={linkStyle}>Your profile</a><br />
                    <a href="#" style={linkStyle}>Transfer and Conversation of shares</a><br />
                </div>
                <div className="col-4 px-5">
                    <h4 className="mt-5 mb-5">
                        <i class="fa-solid fa-chart-column"></i> Your Zerodha Account
                    </h4>
                    <a href="#" style={linkStyle}>Margin/leverage, Product and Order types</a><br />
                    <a href="#" style={linkStyle}>Kite Web and Mobile</a><br />
                    <a href="#" style={linkStyle}>Trading FAQs</a><br />
                    <a href="#" style={linkStyle}>Corporate Actions</a><br />
                    <a href="#" style={linkStyle}>Sentinel</a><br />
                    <a href="#" style={linkStyle}>Kite API</a><br />
                    <a href="#" style={linkStyle}>Pi and other platforms</a><br />
                    <a href="#" style={linkStyle}>Stockreports+</a><br />
                    <a href="#" style={linkStyle}>GTT</a><br />
                </div>
            </div>
            <div className="row mb-5 px-5">
                <div className="col-4 px-5">
                    <h4 className="mb-5">
                        <i class="fa-solid fa-money-check-dollar"></i> Funds
                    </h4>
                    <a href="#" style={linkStyle}>Adding Funds</a><br />
                    <a href="#" style={linkStyle}>Fund Withdrawl</a><br />
                    <a href="#" style={linkStyle}>eMandates</a><br />
                    <a href="#" style={linkStyle}>Adding Bank Accounts</a><br />
                </div>
                <div className="col-4 px-5">
                    <h4 className="mb-5">
                        <i class="fa-brands fa-xbox"></i> Console
                    </h4>
                    <a href="#" style={linkStyle}>Reports</a><br />
                    <a href="#" style={linkStyle}>Ledger</a><br />
                    <a href="#" style={linkStyle}>Portfolio</a><br />
                    <a href="#" style={linkStyle}>60 day Challenge</a><br />
                    <a href="#" style={linkStyle}>IPO</a><br />
                    <a href="#" style={linkStyle}>Referral Program</a><br />
                </div>
                <div className="col-4 px-5">
                    <h4 className="mb-5">
                        <i class="fa-solid fa-coins"></i> Coin
                    </h4>
                    <a href="#" style={linkStyle}>Understanding Mutual Funds</a><br />
                    <a href="#" style={linkStyle}>About Coin</a><br />
                    <a href="#" style={linkStyle}>Buying and Selling through Coin</a><br />
                    <a href="#" style={linkStyle}>Starting SIP</a><br />
                    <a href="#" style={linkStyle}>Managing your Portfolio</a><br />
                    <a href="#" style={linkStyle}>Coin Aoo</a><br />
                    <a href="#" style={linkStyle}>Moving to Coin</a><br />
                    <a href="#" style={linkStyle}>Government Securities</a><br />
                </div>
            </div>
        </div>
    )
}