const StatusIndicator = () => {
    return (
        <div className="status-container">
            <span style={doneStyles}>Done</span>
            <span style={notStartedStyles}>Not started</span>
            <span style={inProgressStyles}>In progress</span>
        </div>
    )
}

const inProgressStyles = { borderLeft: '10px solid yellow' }
const notStartedStyles = { borderLeft: '10px solid red' }
const doneStyles = { borderLeft: '10px solid green' }

export default StatusIndicator