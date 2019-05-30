// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

declare module 'resources' {

    interface ShoppingCart {
        id: number;
        name: string;
        Profile: Profile;
        ShoppingCartItems: ShoppingCartItem[];

        createdAt: Date;
        updatedAt: Date;
    }

}
