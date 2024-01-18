export default function WaysToTeach(props){
    return(
        <ul>
            <li>
                <p>
                    <strong>
{props.title}
                    </strong>
                    {props.description}
                </p>
            </li>
        </ul>
    )
  }