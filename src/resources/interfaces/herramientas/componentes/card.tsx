import React from 'react';
import '../../../../assets/css/card_setting.css';;

interface JobCardProps {
    avatarSrc: React.ReactNode;
    section: string;
    timeAgo: string;
    recommendation?: boolean; // Para el tag de recomendación
    title: string;
    description: string;
    salary: string;
}

const CardSetting: React.FC<JobCardProps> = ({
    avatarSrc,
    section,
    timeAgo,
    title,
    description,
    salary,
}) => {
    return (

        <>

            <div className="job-card">
                <div className="job-card-header">
                    <div className="user-info">

                        <span className='user-avatar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{avatarSrc}</span>
                        <div className="user-details">
                            <span className="user-name">{section}</span>
                            <span className="time-ago">{timeAgo}</span>
                        </div>
                    </div>

                </div>

                <h2 className="job-title">{title}</h2>
                <p className="job-description">{description}</p>

                <div className="job-footer">
                    <span className="job-salary">{salary}</span>
                    <button className="apply-button">ver</button>
                </div>
            </div>
        </>
    );
};

export default CardSetting;