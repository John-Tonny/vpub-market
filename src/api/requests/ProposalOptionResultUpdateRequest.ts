// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';

// tslint:disable:variable-name
export class ProposalOptionResultUpdateRequest extends RequestBody {

    @IsNotEmpty()
    public proposal_result_id: number;

    @IsNotEmpty()
    public proposal_option_id: number;

    @IsNotEmpty()
    public weight: number;

    @IsNotEmpty()
    public voters: number;

}
// tslint:enable:variable-name
