import React from 'react'; // we need this to make JSX compile

type IpTableProps = {
    city?: string;
    country?: string;
    hostname?: string;
    ip?: string;
    loc?: string;
    org?: string;
    postal?: string;
    region?: string;
    timezone?: string;
}



export const IpTable = (props: IpTableProps) => {

    const { city, hostname, ip, org, postal, timezone } = props;
    return (
        <table className="ipTable">
            <tbody>
                <tr>
                    <th>Your Ip Information</th>

                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>Ip Address: </span> {ip}</td>
                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>Hostname: </span> {hostname}</td>
                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>City: </span> {city}</td>
                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>Organization: </span> {org}</td>
                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>Postal Code: </span> {postal}</td>
                </tr>
                <tr>
                    <td><span style={{ fontWeight: "bold" }}>Timezone: </span> {timezone}</td>
                </tr>
            </tbody>
        </table>
    )

}

