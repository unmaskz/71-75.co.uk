import Head from 'next/head';

import Hero from '@/components/hero/Hero';
import Location from '@/components/location/Location';
import MeetTeam from '@/components/meet-team/MeetTeam';
import MeetingRooms from '@/components/meeting-rooms/MeetingRooms';
import Section from '@/components/section/Section';
import Statistics from '@/components/statistics/Statistics';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';
import { MyPage } from '@/interfaces/page.interface';
import { getDirectusClient } from '@/lib/directus';

const HomePage: MyPage = (props: any) => {
    const { hero, stats, usps, rooms, staff } = props;
    return (
        <>
            <Hero hero={hero} />
            <Statistics stats={stats} />
            <Section colour="white">
                <MeetingRooms rooms={rooms} />
            </Section>
            <Section colour="white">
                <WhyChooseUs usps={usps} />
            </Section>
            <Section colour="white">
                <MeetTeam staff={staff} />
            </Section>
        </>
    );
};

export const getStaticProps = async () => {
    const directus = await getDirectusClient();

    const hero = await directus.items('hero').readByQuery({
        limit: -1,
        fields: ['heading', 'subheading', 'content', 'button_text', 'button_link'],
    });

    const stats = await directus.items('statistics').readByQuery({
        limit: -1,
        fields: ['id', 'heading', 'value'],
    });

    const usps = await directus.items('unique_selling_points').readByQuery({
        limit: -1,
        fields: ['id', 'slug', 'heading', 'content', 'icon'],
    });

    const meetingRooms = await directus.items('meeting_rooms').readByQuery({
        limit: -1,
        fields: ['id', 'name', 'location', 'description', 'image', 'room_size', 'seats'],
    });

    const staff = await directus.items('staff').readByQuery({
        limit: -1,
        fields: ['id', 'name', 'job_title', 'biography', 'image'],
    });

    return {
        props: {
            hero: hero.data,
            stats: stats.data,
            usps: usps.data,
            rooms: meetingRooms.data,
            staff: staff.data,
        },
    };
};

export default HomePage;

HomePage.Layout = 'Home';
