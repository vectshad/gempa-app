import React, { useState, useEffect} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../styles/Dashboard.css";
import { Table } from "react-bootstrap";

function Dashboard() {
    const [feltEarthquake, setFeltEarthquake] = useState();
    const [recentEarthquake, setRecentEarthquake] = useState();

    const changeDateFormat = (DateTime) => {
        var date = new Date(DateTime);
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute= date.getMinutes();
        var second =date.getSeconds();

        if (day < 10) {
            day = "0" + day;
          }
        if (month < 10) {
            month = "0" + month;
        }
        return `${day}-${month}-${year}  ${hour}:${minute}:${second}`
    }

    useEffect(() => {
        const d = new Date();
        console.log(changeDateFormat(d));
        const getFeltEarthquake = async () => {
            try {
                const res = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");
                const data = await res.data.Infogempa.gempa;
                if (res.status === 200) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].DateTime = changeDateFormat(data[i].DateTime); 
                    }
                    console.log(data);
                
                    setFeltEarthquake(data);
                }
            } catch(error) {
                console.log(error)
            }
        }
        const getRecentEarthquake = async () => {
            try {
                const res = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
                const data = await res.data.Infogempa.gempa;
                if (res.status === 200) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].DateTime = changeDateFormat(data[i].DateTime); 
                    }
                    console.log(data);
                    
                    setRecentEarthquake(data);
                }
            } catch(error) {
                console.log(error)
            }
        }
        getFeltEarthquake()
        getRecentEarthquake()
    }, [])
    
    if (!recentEarthquake || !feltEarthquake) return null;
    return (
        <div>
            <Navbar />
            <div className="Container">
                <h1>Dashboard</h1>
                <div className="md-5">
                    <Table responsive striped bordered size="sm">
                        <thead className="Dark">
                            <tr>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Jam</th>
                                <th scope="col">DateTime</th>
                                <th scope="col">Koordinat</th>
                                <th scope="col">Lintang</th>
                                <th scope="col">Bujur</th>
                                <th scope="col">Wilayah</th>
                                <th scope="col">Magnitude</th>
                                <th scope="col">Kedalaman</th>
                                <th scope="col">Potensi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentEarthquake.map((earthquake, index) =>
                            <tr key={index}>
                                <td>{earthquake.Tanggal}</td>
                                <td>{earthquake.Jam}</td>
                                <td>{earthquake.DateTime}</td>
                                <td>{earthquake.Coordinates}</td>
                                <td>{earthquake.Lintang}</td>
                                <td>{earthquake.Bujur}</td>
                                <td>{earthquake.Wilayah}</td>
                                <td>{earthquake.Magnitude}</td>
                                <td>{earthquake.Kedalaman}</td>
                                <td>{earthquake.Potensi}</td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table responsive striped bordered size="sm">
                        <thead className="Dark">
                            <tr>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Jam</th>
                                <th scope="col">DateTime</th>
                                <th scope="col">Koordinat</th>
                                <th scope="col">Lintang</th>
                                <th scope="col">Bujur</th>
                                <th scope="col">Wilayah</th>
                                <th scope="col">Magnitude</th>
                                <th scope="col">Kedalaman</th>
                                <th scope="col">Dirasakan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feltEarthquake.map((earthquake, index) =>
                            <tr key={index}>
                                <td>{earthquake.Tanggal}</td>
                                <td>{earthquake.Jam}</td>
                                <td>{earthquake.DateTime}</td>
                                <td>{earthquake.Coordinates}</td>
                                <td>{earthquake.Lintang}</td>
                                <td>{earthquake.Bujur}</td>
                                <td>{earthquake.Wilayah}</td>
                                <td>{earthquake.Magnitude}</td>
                                <td>{earthquake.Kedalaman}</td>
                                <td>{earthquake.Dirasakan}</td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
