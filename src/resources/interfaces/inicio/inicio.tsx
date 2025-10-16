import { useState } from "react"

function Inicio() {

    return (
        <>
            {/* Tarjetas Superiores */}
            <section className="top-cards">
                <div className="card">
                    <i className="fas fa-chart-bar"></i>
                    <span>Credits used in the last month</span>
                    <p>46,042</p>
                </div>
                <div className="card">
                    <i className="fas fa-coins"></i>
                    <span>Total Credits</span>
                    <p>149,758</p>
                </div>
                <div className="card">
                    <i className="fas fa-credit-card"></i>
                    <span>Plan Credits</span>
                    <p>100,000</p>
                </div>
                <div className="card">
                    <i className="fas fa-award"></i>
                    <span>Current Plan</span>
                    <p>Expert+</p>
                    <button>Manage</button>
                </div>
            </section>

            {/* Sección de Gráfico */}
            <section className="graph-section">
                <div className="graph-header">
                    <span>Credits usage in the last year</span>
                    <p>149,758</p>
                </div>
                <div className="chart-container">
                    <img src="https://via.placeholder.com/600x300/f0f0f7/888888?text=Graph+Placeholder" alt="Graph Placeholder" />
                </div>
            </section>

            {/* Sección de Tabla */}
            <section className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Email Address</th>
                            <th>Provider</th>
                            <th>Created</th>
                            <th>Last Sign In</th>
                            <th>User UID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Filas de la tabla (usarían .map() en una implementación real con datos) */}
                        <tr>
                            <td>hello@simonple.com</td>
                            <td>Google</td>
                            <td>06 Nov, 2023 11:33</td>
                            <td>06 Nov, 2023 11:33</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>thomas@gmail.com</td>
                            <td>Google</td>
                            <td>06 Nov, 2023 11:29</td>
                            <td>06 Nov, 2023 11:30</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>markwilliams@hotmail.com</td>
                            <td>Email</td>
                            <td>06 Nov, 2023 11:21</td>
                            <td>06 Nov, 2023 11:21</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>examplejosh@mail.com</td>
                            <td>Google</td>
                            <td>06 Nov, 2023 11:19</td>
                            <td>06 Nov, 2023 11:09</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>estherajia@company.com</td>
                            <td>Email</td>
                            <td>06 Nov, 2023 11:07</td>
                            <td>06 Nov, 2023 11:07</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>john.doe@example.com</td>
                            <td>Google</td>
                            <td>06 Nov, 2023 10:55</td>
                            <td>06 Nov, 2023 10:55</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                        <tr>
                            <td>jane.smith@email.com</td>
                            <td>Email</td>
                            <td>06 Nov, 2023 10:48</td>
                            <td>06 Nov, 2023 10:48</td>
                            <td>f3r426c429-ca32-49fc-92df...</td>
                            <td><i className="fas fa-ellipsis-h"></i></td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <span>Showing 1 to 7 of 9794 results</span>
                    <div className="pagination-controls">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Inicio