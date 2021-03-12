export type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
    }
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <img src={props.repository.owner.avatar_url} alt="avatar"/>

      <div className="repo-info">
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>

        <a href="">{props.repository.html_url}</a>
      </div>
    </li>
  );
}