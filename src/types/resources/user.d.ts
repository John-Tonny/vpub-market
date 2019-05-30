// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

declare module 'resources' {

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        auth0UserId: string;
        picture: string;
        createdAt: Date;
        updatedAt: Date;
    }

}
