import React from "react";
import { ReactComponent as MoreIcon } from "./assets/icons/More.svg";
import { ReactComponent as UsersIcon } from "./assets/icons/tabler_users.svg";
import { ReactComponent as DocsIcon } from "./assets/icons/tabler_file-description.svg";

const CARD_STATUSES = [
	{
		status: 1,
		text: "В приоритете",
        cardStatus:'status1'
	},
	{
		status: 2,
		text: "Второстепенная",
        cardStatus:'status2'
	},
	{
		status: 3,
		text: "Срочная заявка",
        cardStatus:'status3'
	},
];

const CardComponent = ({ snapshot, provided, el }) => {
    console.log("el", el);
	const { status, jobTitle, department, vacancies, applicants, recruiter } = el;
	const { cardStatus,text } = CARD_STATUSES.find(
		(s) => s.status === status
	);

	const handleClickMore = () => {
		alert("clicked!");
	};

	return (
		<div
			className="job-item item "
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			<div className="job-item__content">
				<div className="job-item__header">
					<div className="job-item__title">
						<span className="job-item__title-text ">{jobTitle}</span>
						<span className="job-item__department">{department}</span>
					</div>
					<button className="job-item__more-button" onClick={handleClickMore}>
						<MoreIcon />
					</button>
				</div>
				<div className="job-item__info ">
					<span className={`job-item__status ${cardStatus}`}>{text}</span>
					<span className="job-item__vacancies ">
						<UsersIcon className="icon" />
						<span className="job-item__vacancies-count">{vacancies}</span>
					</span>
					<span className="job-item__vacancies ">
						<DocsIcon className="icon" />
						<span className="job-item__vacancies-count ">{applicants}</span>
					</span>
				</div>
				<div className="job-item__recruiter">
					<img
						className="job-item__recruiter-avatar"
						src={recruiter.profilePicture}
						alt="Rounded avatar"
						loading="lazy"
					/>
					<div className="job-item__recruiter-info">
						<p className="job-item__recruiter-role ">Рекруитер</p>
						<p className="job-item__recruiter-name">{recruiter.fullname}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
