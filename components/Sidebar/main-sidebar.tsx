'use client';
import { useState } from 'react';
import { Group, Code, Switch } from '@mantine/core';
import {
    IconLogout,
    IconHome,
    IconClipboardText,
    IconDevices2,
} from '@tabler/icons-react';
import classes from './css/DoubleNavbar.module.css';

const data = [
    { link: '', label: 'Dashboard', icon: IconHome },
    { link: '', label: 'Timesheet', icon: IconClipboardText },
    { link: '', label: 'IT Asset Management', icon: IconDevices2 },
];

export function MainSidebar() {
    const [active, setActive] = useState('Dashboard');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    {/* Memuat gambar logo dari folder public */}
                    <img src="/assets/img/logo-pal.png" alt="Logo" width={28} height={28} />
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <span>Change Mode</span>
                    <Switch className={classes.switch} />
                </a>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}
