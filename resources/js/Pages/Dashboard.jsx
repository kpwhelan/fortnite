import StatsHistory from '@/Components/StatsHistory';
import CurrentStats from '@/Components/CurrentStats';
import NewsCarousel from '@/Components/NewsCarousel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import StatsContainer from '@/Components/StatsContainer';

export default function Dashboard({ auth }) {
    const [playerData, setPlayerData] = useState([]);

    const fetchPlayerData = async () => {
        const accountId = await fetchAccountId();

        await axios.get(`https://fortniteapi.io/v1/stats?account=${accountId}`, {
            headers: {
                'Authorization': '55d3afac-17703e01-c084dfc7-7af2f209'
              }
        })
        .then(response => setPlayerData(response.data))
        .catch(error => console.log(error));


    }

    const fetchAccountId = async () => {
        let accountId = '';
        await axios.get(`https://fortniteapi.io/v1/lookup?username=${auth.user.fortnite_username}`, {
            headers: {
                'Authorization': '55d3afac-17703e01-c084dfc7-7af2f209'
              }
        })
        .then(response => accountId = response.data.account_id)
        .catch(error => error);

        return accountId;
    }

    useEffect(() => {
        fetchPlayerData();
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<NewsCarousel />}
        >
            <Head title="Dashboard" />

            <StatsContainer className={"flex items-center mt-6"}>
                <CurrentStats playerName={`${auth.user.first_name} - ${playerData.name}`} currentStats={playerData.account} />

                <StatsHistory historyStats={playerData.accountLevelHistory} />
            </StatsContainer>
        </AuthenticatedLayout>
    );
}
