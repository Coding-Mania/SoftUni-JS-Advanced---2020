function solve(worker) {

    if (!worker.dizziness) {
        return worker;
    }

    worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;

    return worker;
}
