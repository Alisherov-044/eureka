type TUser = {
    id: number;
    name: string;
    specification: string;
    image: string;
};

export const team: TUser[] = [
    {
        id: 1,
        name: "Mirav Vyas",
        specification: "UK & Europe Lead",
        image: "/team/img-1.png",
    },
    {
        id: 2,
        name: "Ilyos Olimov",
        specification: "Uzbekistan Lead",
        image: "/team/img-2.png",
    },
    {
        id: 3,
        name: "Nodir Sharipov",
        specification: "Talent Success Lead",
        image: "/team/img-3.png",
    },
];
