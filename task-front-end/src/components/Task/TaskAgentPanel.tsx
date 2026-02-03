import { useState } from "react";
import { TaskAgent } from "../../agents/TaskAgents";
import { useTaskContext } from "../../context/Tasks/useTaskContext";
import { TaskCardTitle, TaskColHeader, TaskColTitle } from "../../styles/Task.styles";
import { AgentButton, AgentLog, AgentLogContainer } from "../../styles/Button.styles";

const TaskAgentPanel = ({ agents }: { agents: TaskAgent[] }) => {
    const { tasks, dispatch } = useTaskContext();
    const [agentLogs, setAgentLogs] = useState<string[]>([]);

    const runAgent = async (agent: TaskAgent) => {
        setAgentLogs(prev => [...prev, `${agent.name} is thinking...`]);

        await new Promise(r => setTimeout(r, 1000));

        const result = await agent.act(tasks, dispatch);
        setAgentLogs(prev => {
            const newLogs = [...prev];
            newLogs[newLogs.length - 1] = result;
            return newLogs;
        });
    }

    return (
        <div>

            <TaskCardTitle>Task Agent Panel</TaskCardTitle>
            {agents.map((agent) => (
                <AgentButton key={agent.name} onClick={() => runAgent(agent)}>
                    {agent.name}
                </AgentButton>
            ))}

            <AgentLogContainer>
                {agentLogs.map((log) => (
                    <AgentLog>{log}</AgentLog>
                ))}
            </AgentLogContainer>
        </div>
    );
};

export default TaskAgentPanel;