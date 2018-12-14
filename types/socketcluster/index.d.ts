// Type definitions for socketcluster 14.0
// Project: https://github.com/SocketCluster/socketcluster
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventEmitter } from "events";
import { SCServer } from "socketcluster-server";
import { ChildProcess } from "child_process";

interface WorkerStartInfo {
    id: number;
    pid: number;
    respawn: boolean;
}

interface WorkerClusterStartInfo {
    pid: number;
    childProcess: ChildProcess;
}

interface WorkerClusterReadyInfo {
    pid: number;
    childProcess: ChildProcess;
}

interface WorkerClusterExitInfo {
    pid: number;
    code: number;
    signal: string;
    childProcess: ChildProcess;
}

export = SocketCluster;

declare class SocketCluster extends EventEmitter {
    readonly EVENT_FAIL: "fail";
    readonly EVENT_WARNING: "warning";
    readonly EVENT_READY: "ready";
    readonly EVENT_WORKER_START: "workerStart";
    readonly EVENT_WORKER_EXIT: "workerExit";
    readonly EVENT_BROKER_START: "brokerStart";
    readonly EVENT_BROKER_EXIT: "brokerExit";
    readonly EVENT_WORKER_CLUSTER_START: "workerClusterStart";
    readonly EVENT_WORKER_CLUSTER_READY: "workerClusterReady";
    readonly EVENT_WORKER_CLUSTER_EXIT: "workerClusterExit";

    options: SCServer.SCServerOptions;

    constructor(options?: SCServer.SCServerOptions);

    on(event: "fail", listener: (err: Error) => void): this;
    on(event: "warning", listener: (warning: Error) => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "workerStart", listener: (workerInfo: WorkerStartInfo) => void): this;
    on(event: "workerExit", listener: (workerInfo: SocketCluster.WorkerExitInfo) => void): this;
    on(event: "brokerStart", listener: (brokerInfo: SocketCluster.BrokerStartInfo) => void): this;
    on(event: "brokerExit", listener: (brokerInfo: SocketCluster.BrokerExitInfo) => void): this;
    on(event: "workerClusterStart", listener: (workerClusterInfo: WorkerClusterStartInfo) => void): this;
    on(event: "workerClusterReady", listener: (workerClusterInfo: WorkerClusterReadyInfo) => void): this;
    on(event: "workerClusterExit", listener: (workerClusterInfo: WorkerClusterExitInfo) => void): this;
}

declare namespace SocketCluster {
    interface WorkerExitInfo {
        id: number;
        pid: number;
        code: number;
        signal: string;
    }

    interface BrokerStartInfo {
        id: number;
        pid: number;
        respawn: boolean;
    }

    interface BrokerExitInfo {
        id: number;
        pid: number;
        code: number;
        signal: string;
    }
}