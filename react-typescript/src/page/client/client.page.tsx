import React from 'react';
import './client.page.css';

const option=[
    {label:'name'},
    {label:'age'},
    {label:'work'},
]

function client (){
    return(
        <div>
            <h2>Hi,please select here!</h2>
            <label>
                search:
                <select>
                    <option value="name">name</option>
                    <option value="age">age</option>
                    <option selected value="work">work</option>
                </select>
            </label>
            <input type="submit" value="submit"></input>
            <section>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Work</th>
                    </tr>
                    <tr>
                        <td>Harden</td>
                        <td>28</td>
                        <td>Guard</td>
                    </tr>
                    <tr>
                        <td>KD</td>
                        <td>30</td>
                        <td>Guard</td>
                    </tr>
                    <tr>
                        <td>King</td>
                        <td>35</td>
                        <td>Center</td>
                    </tr>
                </table>
            </section>
            
            <div className="part">
                <div className="row">
                    <div className="column">
                        <h2 className="h2"> KD</h2>
                        <p>Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA). 
                            He played one season of college basketball for the University of Texas, and was selected as the second overall pick by the Seattle SuperSonics in the 2007 NBA draft. He played nine seasons with the franchise, which became the Oklahoma City Thunder in 2008, before signing with the Golden State Warriors in 2016, 
                            winning back-to-back championships in 2017 and 2018.</p>
                    </div>
                    
                    <div className="column">
                        <h2 className="h2">King</h2>
                        <p>LeBron Raymone James Sr. (/ləˈbrɒn/ lə-BRON; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). 
                            Widely considered one of the greatest NBA players in history, James is frequently compared to Michael Jordan in debates over the greatest basketball player of all time</p>
                    </div>
                    <div className="column">
                        <h2 className="h2">Harden</h2>
                        <p>James Edward Harden Jr. (born August 26, 1989) is an American professional basketball player for the Houston Rockets of the National Basketball Association (NBA). 
                            He became one of the NBA's most prolific scorers and earned recognition as the best shooting guard in the NBA,[1][2] as well as one of the top overall players in the league</p>
                    </div>
                </div>
            </div>
            <div>

            <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Work</th>
                    </tr>
                    <tr>
                        <td>Harden</td>
                        <td>28</td>
                        <td>Guard</td>
                    </tr>
                    <tr>
                        <td>KD</td>
                        <td>30</td>
                        <td>Guard</td>
                    </tr>
                    <tr>
                        <td>King</td>
                        <td>35</td>
                        <td>Center</td>
                    </tr>
                    <tr>
                        <td>Paul</td>
                        <td>35</td>
                        <td>point guard</td>
                    </tr>
                    <tr>
                        <td>Wings</td>
                        <td>23</td>
                        <td>Guard</td>
                    </tr>
                    <tr>
                        <td>worldpeace</td>
                        <td>35</td>
                        <td>Center</td>
                    </tr>
                </table>
            </div>
            
            
        </div>
        
    );
}

export default client;