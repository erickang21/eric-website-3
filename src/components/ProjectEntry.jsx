import Card from 'react-bootstrap/Card';
import '../css/components/ProjectEntry.css';

const ProjectEntry = ({ name, iconURL, description, links }) => {
  return (
    <Card className="project-card">
      <Card.Header>
        <div className="project-title">
          <img src={iconURL} alt={name} height={48} width={48}/>
          <span className="project-title-text">{name}</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {description}
        </Card.Text>
        <div>
          {links.map((link) => {
            return <Card.Link className="project-link" href={link.link}>&gt; {link.text}</Card.Link>
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectEntry;
