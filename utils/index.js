module.exports = () => {
    const today = new Date();
return  `

<!doctype html>
    <html>
       <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
            ion-content {
                background-color: #c0c0ff;
                .printable-content {
                  margin: 16px;
                  overflow-x: scroll;
                  overflow-y: scroll;
                  background-color: #ffffff;
                  .printable-area {
                    width: 595px;
                    height: 540px;
                    .header-table {
                      background-color: #18AC52;
                      margin: 2%;
                      width: 96%;
                      color: #ffffff;
                      th, td {
                        text-align: left;
                        padding: 5px;
                      }
                      .title {
                        padding: 5px 20px;
                        font-size: 20px;
                        font-weight: bold;
                        text-transform: uppercase;
                      }
                    }
                    h1, h3 {
                      margin-left: 10px;
                    }
                    h3 {
                      margin-top: 20px;
                    }
                    .subheader-table {
                      margin: 2%;
                      width: 96%;
                      td {
                        vertical-align: top;
                        dt {
                          font-size: 11px;
                          color: #999;
                          margin-bottom: 5px;
                        }
                        dd {
                          margin: 0;
                        }
                      }
                      td:last-child {
                        text-align: right;
                        dd {
                          font-size: 28px;
                          font-weight: bold;
                        }
                      }
                    }
                    .detail-table {
                      margin: 2%;
                      width: 96%;
                      border-top: 2px solid #CCC;
                      border-bottom: 2px solid #CCC;
                      th, td {
                        padding: 5px;
                      }
                      th {
                        border-bottom: 2px solid #CCC;
                      }
                      td:nth-child(2), td:nth-child(4) {
                        text-align: right;
                      }
                      td:nth-child(3) {
                        text-align: center;
                      }
                    }
                    .footer-table {
                      margin: 2%;
                      width: 96%;
                      td {
                        padding: 5px;
                        text-align: right;
                        font-weight: bold;
                      }
                    }
                  }
                }
              } 
            </style>
        </head>
        <body>
            <div class="printable-content">
            <div class="printable-area" id="printable-area">
            <table class="header-table">
                <tr>
                <td width="40%" class="title"><img src="https://www.djamware.com/assets/djamware-logo-78bf8a4819aa6df9df518daaa5fe70e0.png" alt="logo" height="40px" /></td>
                <td width="60%">
                    <table width="100%">
                    <tr>
                        <td width="50%">+677-12332-1222</td>
                        <td width="50%">Your Address 1st</td>
                    </tr>
                    <tr>
                        <td>your@email.com</td>
                        <td>City, State, Country</td>
                    </tr>
                    <tr>
                        <td>yourwebsite.com</td>
                        <td>Post Code</td>
                    </tr>
                    </table>
                </td>
                </tr>
            </table>
            <h1>Invoice</h1>
            <table class="subheader-table">
                <tr>
                <td width="30%">
                    <dt>Billed To:</dt>
                    <dd>Client Name</dd>
                    <dd>Address 1st Line</dd>
                    <dd>City, State, Country</dd>
                    <dd>Post Code</dd>
                </td>
                <td width="30%">
                    <dt>Invoice Number:</dt>
                    <dd>009223-222</dd>
                </td>
                <td width="40%">
                    <dt>Invoice Total:</dt>
                    <dd>$6.600</dd>
                </td>
                </tr>
            </table>
            <h3>Invoice Details</h3>
            <table class="detail-table">
                <tr>
                <th width="50%">Description</th>
                <th width="20%">Unit Price</th>
                <th width="10%">Qty</th>
                <th width="20%">Amount</th>
                </tr>
                <tr>
                <td>Apple Macbook Pro Retina 2018</td>
                <td>$4.500</td>
                <td>1</td>
                <td>$4.500</td>
                </tr>
                <tr>
                <td>Apple Mouse Bluetooth</td>
                <td>$500</td>
                <td>1</td>
                <td>$500</td>
                </tr>
                <tr>
                <td>Apple Cinema Display</td>
                <td>$1.000</td>
                <td>1</td>
                <td>$1.000</td>
                </tr>
            </table>
            <table class="footer-table">
                <tr>
                <td width="80%">Sub Total: </td>
                <td width="20%">$6.000</td>
                </tr>
                <tr>
                <td>Tax: </td>
                <td>$600</td>
                </tr>
            </table>
            </div>
            </div>
        </body>
    </html>
`;
};